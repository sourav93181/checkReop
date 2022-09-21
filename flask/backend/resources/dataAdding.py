from flask import request
from flask_restful import Resource
from model.dataAdd import AddUser
class user(Resource):
    def get(self):
        print("request reach")
        result = AddUser.getall()
        return ({'data': [{"user_id": i.user_id, "name": i.name,  "Address": i.Address,"pincode":i.pincode} for i in result]}), 200

    def put(self):
       print("request reach")
       requestBody = request.json
       newUser = AddUser(name=requestBody.get('name', None),  Address=requestBody.get('Address', None), pincode=requestBody.get('pincode',None))
       newUser.add_user()
       return {"message": "Added new User"}, 200

    def post(self):
        print("request reach")
        requestBody=request.json
        result=AddUser.getUserby(entry=requestBody.get('entry',None))
        return ({'data': [{"user_id": i.user_id, "name": i.name,  "Address": i.Address, "pincode": i.pincode} for i in result]}), 200
        # resultbyName = AddUser.getUserbyName(name=requestBody.get('name', None))
        # if len(resultbyName) != 0:
        #     print("check")
        #     return ({'data': [{"user_id": i.user_id, "name": i.name,  "Address": i.Address, "pincode": i.pincode} for i in resultbyName]}), 200
        # resultbyAddress = AddUser.getUserbyAddress(Address=requestBody.get('Address', None))
        # if len(resultbyAddress) != 0:
        #     return ({'data': [{"user_id": i.user_id, "name": i.name,  "Address": i.Address, "pincode": i.pincode} for i in resultbyAddress]}), 200
        # resultbyPin = AddUser.getUserbyPin(pincode=requestBody.get('pincode', None))
        # if len(resultbyPin) != 0:
        #     return ({'data': [{"user_id": i.user_id, "name": i.name,  "Address": i.Address, "pincode": i.pincode} for i in resultbyPin]}), 200


