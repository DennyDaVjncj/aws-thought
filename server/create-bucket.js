const AWS=require('aws-sdk');//api allowing communication within cloud
const {v4:uuidv4}=require('uuid');//provides unique uri to each s3 bucket call
AWS.config.update({region:'us-east-2'});//regional config

const s3=new AWS.S3({apiVersion:'2006-03-01'});//newly spawned s3 bucket instance; comes from AWS api

let bucketParams={
    Bucket:'user-images-'+uuidv4()
};//oject for attaching unique uri to s3 bucket instance
s3.createBucket(bucketParams,(err,payload)=>{
    if(err){
        console.log("Bugs",err)
    }else console.log('Connected to AWS api: '+payload)    
});