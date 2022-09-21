
from email.headerregistry import Address
from common import db


class AddUser(db.Model):
    __tablename__ = "newtable"
    user_id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    Address = db.Column(db.String, nullable=False)
    pincode = db.Column(db.Integer,  nullable=False)

    def __init__(self, name, Address, pincode) -> None:

        self.name = name
        self.Address = Address
        self.pincode = pincode

    def add_user(self):
        db.session.add(self)
        db.session.commit()

    def response(self):
        return {"user_id": self.user_id, "name": self.name, "Address": self.Address, "pincode": self.pincode}

    @classmethod
    def getall(cls):
        result = cls.query.all()
        return result

    @classmethod
    def getUserby(cls, entry):
        result = cls.query.filter_by(name=entry).all()
        if len(result) != 0:
            return result

        result = cls.query.filter_by(Address=entry).all()
        if len(result) != 0:
            return result
        result = cls.query.filter_by(pincode=entry).all()
        if len(result) != 0:
            return result
        return result
