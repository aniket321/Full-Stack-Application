const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const auth = require('../../middleware/auth')


//@ GET /api/users
//@ DESC:- will send back the result of all user
//@ Access:-public
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(404).send(e)
    }

})

//@ POST /api/users
//@ DESC:- will create a user and save it
//@ Access:-public
router.post('/', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })

    } catch (e) {
        res.status(400).send(e)
    }
})


router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    } catch (e) {
        res.status(400).send(e)
    }
})


router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()

    } catch (e) {
        res.status(500).send()
    }
})

//used for testing purpose only
router.get('/me', auth, async (req, res) => {

    res.send(req.user)

})


//@ UPDATE /api/users/permission/:id
//@ DESC:- will update the permission
//@ Access:-private only for admin

// router.put('/setPermission/:id', auth, async (req, res) => {

//     try {

//         const user = await User.findById(req.params.id)

//         if (!user) {
//             throw new Error('There is no such user present')
//         }
//         user.permissions = req.body.permissions
//         await user.save()
//         res.send(user)
//     } catch (e) {
//         res.status(404).send(e)
//     }
// })


//@ GET /api/users/permission/:id
//@ DESC:- will provide the permission
//@ Access:-private only for admin

router.get('/permission/:id', auth, (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then(user => {
            res.json(user.permissions)
        })
        .catch(err => res.json({ "msg": err }));
})

//@ Update /api/users/:id
//@ DESC:- will update the information
//@ Access:-public
router.put('/:id', async (req, res) => {

    try {
        const userId = req.params.id;
        const presentUserId = req.body.id
        const { firstName, lastName, email, mobile, password } = { ...req.body };
        const user = await User.findById(userId)
        const presentUser = await User.findById(presentUserId)

        if (presentUser.isadmin) {
            user.permissions = req.body.permissions
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.mobile = mobile;
        user.password = password;
        await user.save();
        res.json(user);

    } catch (e) {
        res.status(404).json({ "msg": "Not FOUND" })
    }

})


//@ Delete /api/users/:id
//@ DESC:- will delete a information
//@ Access:-public
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ "msg": "Some error occured" }));
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then(user => {
            res.json(user);
        })
        .catch(err => res.status(404).json({ "msg": "User not found" }));
});
module.exports = router;