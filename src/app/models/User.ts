export enum roles {
    staff,
    student,
    manager,
    admin
}

export enum genders {
    male,
    female,
    other
}

export interface Company {
    id: number,
    name: string,
    description: string,
    location: Address
  }

  export interface Address {
    city: string,
    street: string,
    postalCode: string
  }


export interface Employee {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: Address,
    role: roles,
    username: string,
    profilePhotoUrl: string,
    companies: Company[],
    gender: genders
  }