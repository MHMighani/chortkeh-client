const Asset = require('../models/asset');
const express = require('express');
const router = new express.Router();

// read all assets
router.get('/assets', async (req, res) => {
	try{
        const assets = await Asset.find({})
        res.send(assets)
    }catch(e){
        res.status(500).send(e)
    }
});

// Creating an asset
router.post('/assets', async (req, res) => {
	const asset = new Asset(req.body);

	try {
		await asset.save();
		res.status(201).send(asset);
	} catch (e) {
		res.status(500).send(e);
	}
});

// delete an asset
router.delete('/assets/:id', async (req, res) => {
	try {
		const asset = await Asset.findByIdAndDelete({ _id: req.params.id });
		if (!asset) {
			return res.status(404).send();
		}
		res.send(asset);
	} catch (e) {
		res.status(404).send(e);
	}
});

// updating an asset
router.patch('/assets/:id', async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['amount'];
	const isInvalidOperation = updates.every(update => allowedUpdates.includes(update));

	if (!isInvalidOperation) {
		return res.status(400).send('ivalid update operation');
	}
	try {
		const asset = await Asset.findOne({ _id: req.params.id });
        if(!asset){
            return res.status(404).send()
        }

		updates.forEach(update => (asset[update] = req.body[update]));
        await asset.save();
        
		res.send(asset);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
