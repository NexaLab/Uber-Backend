


class UserDto {



    constructor(builder) {


        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.email = builder.email;
        this.password = builder.password;
        this.profilePic = builder.profilePic;
        this.phoneNo = builder.phoneNo;
        this.country = builder.country;
        this.city = builder.city;


    }
}





class UserDtoBuilder {



    constructor() {
        this.userDto = new UserDto({});
    }





    firstName(firstName) {
        this.userDto.firstName = firstName;
        return this;
    }


    lastName(lastName) {
        this.userDto.lastName = lastName;
        return this;
    }


    email(email) {
        this.userDto.email = email;
        return this;
    }


    password(password) {
        this.userDto.password = password;
        return this;
    }


    profilePic(profilePic) {
        this.userDto.profilePic = profilePic;
        return this;
    }


    phoneNo(phoneNo) {
        this.userDto.phoneNo = phoneNo;
        return this;
    }


    country(country) {
        this.userDto.country = country;
        return this;
    }


    city(city) {
        this.userDto.city = city;
        return this;
    }


    build() {
        return this.userDto;
    }
}



module.exports = { UserDto, UserDtoBuilder };
