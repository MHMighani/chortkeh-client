const express = require('express');
const User = require('../models/user');
const router = new express.Router();

// get all users
router.get('/users', async (req, res) => {
	try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
});

// login a user
router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.passeord)
        const token = await User.generateAuthToken()
        res.send({user,token})
    }catch(e){
        res.status(500).send(user)
    }
})

// logout a user
router.post('/users/logout',auth,async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(token=>req.token!== token.token)
        await req.user.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})



// create user
router.post('/users', async (req, res) => {
    const user = new User(req.body);

	try {
        await user.save();
        const token = await user.generateAuthToken()
		res.status(201).send({user,token});
	} catch (e) {
		res.status(400).send(e);
	}
});

// update user
router.patch('/users/:id', async (req, res) => {
	const user = await User.findById(req.params.id);
	// const allowedUpdates = ['']
});

// delete user
router.delete('/users/:id', async (req, res) => {
	try {
		const user = await User.findOneAndDelete({ _id: req.params.id });
		if (!user) {
			return res.status(404).send(user);
		}
		res.send(user);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
