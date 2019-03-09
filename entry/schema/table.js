export default {
  node: 'Table',
  props: {
    pagination: false,
    scroll: {
      x: 800,
      y: 200,
    },
    columns: [
      {
        title: 'Full Name',
        width: 200,
        dataIndex: 'name',
        fixed: 'left',
        render: {
          arguments: ['text', 'record', 'index'],
          node: 'span',
          props: {
            style: {
              whiteSpace: 'nowrap',
            },
          },
          children: {
            node: 'p',
            children: [
              {
                node: 'span',
                children: '${index % 2 ? \'SSSS\' : \'TTTT\'}', // eslint-disable-line
              },
              {
                node: 'em',
                children: ', ${record.age}', // eslint-disable-line
              },
            ],
          },
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ],
    dataSource: [
      {
        key: '0',
        name: 'Edrward 1',
        age: 32,
        gender: 'female',
        address: 'London Park no. 1',
      },
      {
        key: '1',
        name: 'Edrward 2',
        age: 32,
        gender: 'male',
        address: 'London Park no. 2',
      },
      {
        key: '2',
        name: 'Edrward 3',
        age: 32,
        gender: 'female',
        address: 'London Park no. 3',
      },
      {
        key: '3',
        name: 'Edrward 4',
        age: 32,
        gender: 'female',
        address: 'London Park no. 4',
      },
      {
        key: '4',
        name: 'Edrward 5',
        age: 32,
        gender: 'male',
        address: 'London Park no. 5',
      },
    ],
    bordered: false,
  },
}