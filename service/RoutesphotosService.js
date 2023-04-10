'use strict';
//Import DB Modules
const models = require('../database/models');
const Photo = models.photos;

//Import Cache
const CacheService = require('../database/cache/node-cache.js');
const ttl = 60 * 60 * 1; //cache for 1 Hour
const cache = new CacheService(ttl);
const cache_key = 'photos';

//Get Photos
exports.getPhotos = async (request, response) => {
	return await cache.get(`${cache_key}`, () =>
		Photo.findAll({
			order: [
				['id', 'ASC'],
			]
		}))
		.then((photos) => { 
			response.status(200).send({
				status: 'Success',
				message: 'Photo Information retrieved',
				data: photos,
			});
		})
		.catch((error) => {
			response.status(500).send({
				error: error.message
			});
		});
};


//Get Photos by Id
exports.getPhotosById = async (request, response) => {
	const id = parseInt(request.params.id);

	return await cache.get(`${cache_key}_${id}`, () =>
		Photo.findAll({
			where: {id: id},
			order: [
				['id', 'ASC'],
			]
		}))
		.then((photos) => { 
			if (!photos) {
				response.status(404).send({
					message: 'Photo Not Found',
				});
			}
			response.status(200).send({
				status: 'Success',
				message: 'Photo Information retrieved',
				data: photos,
			});
		})
		.catch((error) => {
			response.status(500).send({
				error: error.message
			});
		});
};


//Add Photos
exports.addPhotos = async (request, response) => {
	return await Photo.create({
		name: request.query.name,
		url: request.query.url,
		citation: request.query.citation
	})
		.then((photos) => { 
			response.status(201).send({
				status: 'Success',
				message: 'New Photo Created',
				data: photos
			});
		})
		.catch((error) => {
			response.status(500).send({
				error: error.message
			});
		});
};


//Update Photos
exports.updatePhotos = async (request, response) => {
	const id = parseInt(request.params.id);

	return await Photo.update({
		name: request.query.name || photos.name,
		url: request.query.url || photos.url,
		citation: request.query.citation || photos.citation
	},{
		where: {id: id}
	})
		.then((photos) => { 
			response.status(200).send({
				status: 'Success',
				message: `Photo with ID ${id} updated`,
				data: photos
			});
		})
		.catch((error) => {
			response.status(500).send({
				error: error.message
			});
		});
};


//Delete Photos
exports.deletePhotos = async (request, response) => {
	const id = parseInt(request.params.id);
  
	return await Photo.destroy({
		where: {id: id}
	})
		.then((photos) => { 
			if (photos) {
				response.status(200).send({
					status: 'Success',
					message: `Photo with ID ${id} deleted`,
					data: photos
				});
			} 
			else {
				response.status(404).send({
					status: 'Failure',
					message: 'Photo Not Found'
				});
			}
		})
		.catch((error) => {
			response.status(500).send({
				error: error.message
			});
		});
};




