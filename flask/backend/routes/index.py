
from flask_restful import Api
from resources.dataAdding import user
from flask import request
from common import db


def addRoutes(app):
    api = Api(app)
    api.add_resource(user, '/newuser')
    return app
