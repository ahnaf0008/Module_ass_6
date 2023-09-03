const express = require ('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const blogDetailsController = require('../controllers/blogDetailsController');
const commentController = require('../controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');
const profitController = require('../controllers/profitController');
const projectController = require('../controllers/projectController');
const serviceController = require('../controllers/serviceController');
const titleController = require('../controllers/titleController');


router.get('/createBlog',blogController.create);
router.get('/readBlog',blogController.read);
router.get('/updateBlog',blogController.update);
router.get('/deleteBlog',blogController.delete);

router.get('/createBlogDetails',blogDetailsController.create);
router.get('/readBlogDetails',blogDetailsController.read);
router.get('/updateBlogDetails',blogDetailsController.update);
router.get('/deleteBlogDetails',blogDetailsController.delete);

router.get('/createComment',commentController.create);
router.get('/readComment',commentController.read);
router.get('/updateComment',commentController.update);
router.get('/deleteComment',commentController.delete);

router.get('/createMessage',messageController.create);
router.get('/readMessage',messageController.read);
router.get('/updateMessage',messageController.update);
router.get('/deleteMessage',messageController.delete);

router.get('/createPortfolio',portfolioController.create);
router.get('/readPortfolio',portfolioController.read);
router.get('/updatePortfolio',portfolioController.update);
router.get('/deletePortfolio',portfolioController.delete);

router.get('/createProduct',productController.create);
router.get('/readProduct',productController.read);
router.get('/updateProduct',productController.update);
router.get('/deleteProduct',productController.delete);

router.get('/createProfit',profitController.create);
router.get('/readProfit',profitController.read);
router.get('/updateProfit',profitController.update);
router.get('/deleteProfit',profitController.delete);

router.get('/createProject',projectController.create);
router.get('/readProject',projectController.read);
router.get('/updateProject',projectController.update);
router.get('/deleteProject',projectController.delete);


router.get('/createService',serviceController.create);
router.get('/readService',serviceController.read);
router.get('/updateService',serviceController.update);
router.get('/deleteService',serviceController.delete);

router.get('/createTitle',titleController.create);
router.get('/readTitle',titleController.read);
router.get('/updateTitle',titleController.update);
router.get('/deleteTitle',titleController.delete);
module.exports = router