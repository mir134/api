/**
 * Created by Huangsz on 2018/1/17.
 */

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var AuthorizeSchema = new Schema({
	user_id: { type: ObjectId, ref: 'User' },
	network: { type: Date, default: Date.now },
	visit_status: { type: Number, default: 0 },
	alias: String,
	head_img: String,
	idc: Number,
	nick_name: String,
	principal_name: String,
	qrcode_url: String,
	signature: String , //"精致女人的衣柜，精致生活的体验。",
	user_name: String //"gh_b270f4207f8f",
});

/*
 AccountSchema.pre('save', function(next){

 var that = this;

 if (!that.password) {
 next();
 return;
 }

 bcrypt.genSalt(10, function(err, salt) {
 if (err) return next(err);

 bcrypt.hash(that.password, salt, function(err, hash) {
 if (err) return next(err);

 that.password = hash;
 next();
 });
 });

 });
 */

AuthorizeSchema.index({ email: 1 }, { unique: true });
AuthorizeSchema.index({ user_id: 1 }, { unique: true });
AuthorizeSchema.index({ email: 1, user_id: 1 }, { unique: true });

mongoose.model('Authorize', AuthorizeSchema);
