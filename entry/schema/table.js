export default {
  type: 'Table',
  props: {
    pagination: false,
    scroll: {
      x: 1000,
      y: 200,
    },
    columns: [
      {
        title: 'Full Name',
        width: 200,
        key: 'name',
        fixed: 'left',
        render: {
          node: 'div',
          props: {
            style: {
              whiteSpace: 'norwrap',
            },
          },
          children: [
            {
              text: '${text}, ${record.age}, ${index}',
            },
          ],
        },
      },
      {
        title: 'Age',
        width: 200,
        key: 'age',
      },
      {
        title: 'Gender',
        width: 200,
        key: 'gender',
      },
      {
        title: 'Address',
        width: 200,
        key: 'address',
      },
    ],
    dataSource: [
      {
        name: 'Edrward 1',
        age: 32,
        gender: 'female',
        address: 'London Park no. 1',
      },
      {
        name: 'Edrward 2',
        age: 32,
        gender: 'male',
        address: 'London Park no. 2',
      },
      {
        name: 'Edrward 3',
        age: 32,
        gender: 'female',
        address: 'London Park no. 3',
      },
      {
        name: 'Edrward 4',
        age: 32,
        gender: 'female',
        address: 'London Park no. 4',
      },
      {
        name: 'Edrward 5',
        age: 32,
        gender: 'male',
        address: 'London Park no. 5',
      },
    ],
    bordered: false,
  },
}
