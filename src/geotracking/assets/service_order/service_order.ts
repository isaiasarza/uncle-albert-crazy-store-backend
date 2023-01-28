export const SERVICE_ORDERS = [
    {
        _id: 1,
        legacyInfo: undefined,
        serviceOrderCode: '756',
        serviceType: 'FOOD_DELIVERY',
        serviceSubType: 'PEDIDOSYA',
        priority: 'LOW',
        description: '',
        status: 'CORRECTLY_DONE',
        assignedDeliveryUser: {
            _id: '',
            userId:'',
            firstname: 'Ramon',
            lastname: 'Díaz',
        },
        observations: '',
        creationTime: '2023-02-10T14:00:00',
        assignedTime: '2023-02-10T14:10:00',
        estimatedResolutionTime: '2023-02-10T14:48:00',
        resolutionTime: '2023-02-10T15:05:00',
        customerInformation: {
            firstname: 'Carlos',
            lastname: 'Buckle',
            telephones: [
                {countryCode: '+549', areaCode: '280', phoneNumbe: '5743321'}
            ],
        },
        productInformation: [{
            title: 'SUPERPROMO 1kg Helado',
            description: 'El cliente ha realizado un pedido de 1kg de helado, de tres sabores: chocolate, frutilla y vainilla'
        }],
        destination: {
            streetName: 'Av. Roca',
            streetNumber: '765',
            locality: 'Puerto Madryn',
            state: 'Chubut',
            country: 'Argentina',
            referenceInfo: 'Casa color marrón con portón negro grande',
            lat: -42.77129974856648,
            long: -65.0298693001192,
        },
        otherInformation: []
    }
]