from locust import HttpUser, task
from faker import Faker


class ApiLoadTest(HttpUser):


    fake = Faker()



    @task
    def signUp(self):


        email = self.fake.email()
         

        self.client.post("api/auth/signup", {
            
            "firstName": "Afshal",
            "lastName": "Hassan",
            "email": email,
            "password":"Test",
            "profilePic":"Test",
            "phoneNo":"Test",
            "country":"Pakistan",
            "city":"Karachi"

        })