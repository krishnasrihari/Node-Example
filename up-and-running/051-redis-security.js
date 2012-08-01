/**
 * @author krishna
 */
var redis = require('redis');
var client = redis.createClient();

client.auth('foobared');
