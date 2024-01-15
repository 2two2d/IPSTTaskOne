export type TUser = {
    id:            string;
    clientId:      string;
    personId:      string;
    datetimePlan:  string;
    datetimeFact:  null;
    addressId:     string;
    statusId:      string;
    comment:       string;
    shippingCost:  number;
    amount:        number;
    number:        number;
    address:       TAddress;
    client:        TClient;
    carsOrder:     TCarsOrder;
    status:        TStatus;
    person:        TPerson;
    productsOrder: TProductsOrder;
}

export type TAddress = {
    id:     string;
    index:  number;
    city:   string;
    street: string;
    house:  string;
}

export type TCarsOrder = {
    id:         string;
    orderId:    string;
    carShiftId: string;
    comment:    string;
    carShift:   TCarShift;
}

export type TCarShift = {
    id:            string;
    shiftId:       string;
    boosterId:     string;
    mileageStart:  number;
    mileageEnd:    null;
    datetimeStart: string;
    datetimeEnd:   null;
    booster:       TBooster;
    shift:         TShift;
}

export type TBooster = {
    id:      string;
    make:    string;
    model:   string;
    number:  string;
    status:  string;
    deleted: boolean;
}

export type TShift = {
    id:            string;
    driverId:      string;
    datetimeStart: string;
    datetimeEnd:   string;
    type:          string;
    createdAt:     string;
    updatedAt:     string;
    driver:        TDriver;
}

export type TDriver = {
    id:         string;
    lastName:   string;
    firstName:  string;
    patronymic: null;
    login:      string;
    password:   string;
    role:       string;
    phone:      null;
    email:      string;
    deleted:    boolean;
}

export type TClient = {
    id:           string;
    organization: string;
    phone:        string;
    email:        null;
    deleted:      boolean;
}

export type TPerson = {
    id:         string;
    lastName:   string;
    firstName:  string;
    patronymic: null;
    clientId:   string;
    deleted:    boolean;
}

export type TProductsOrder = {
    id:        string;
    productId: string;
    count:     number;
    orderId:   string;
    product:   TProduct;
}

export type TProduct = {
    id:      string;
    name:    string;
    unit:    string;
    cost:    number;
    deleted: boolean;
}

export type TStatus = {
    id:    string;
    name:  string;
    color: string;
}
