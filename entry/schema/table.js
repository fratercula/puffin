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
        title: 'List',
        dataIndex: 'list',
        render: {
          arguments: ['list'],
          node: 'div',
          children: '${JSON.stringify(list)}', // eslint-disable-line
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        render: {
          arguments: ['text'],
          node: 'div',
          children: {
            node: 'Tag',
            props: {
              onClick: ':ttt${text}', // eslint-disable-line
            },
            children: 'xxx ${text}', // eslint-disable-line
          },
        },
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
        list: { b: 2 },
        te: null,
      },
      {
        key: '1',
        name: 'Edrward 2',
        age: 32,
        gender: 'male',
        address: 'London Park no. 2',
        list: [{ a: 1 }, { b: 2 }],
        te: null,
      },
      {
        key: '2',
        name: 'Edrward 3',
        age: 32,
        gender: 'female',
        address: 'London Park no. 3',
        list: [{ a: 1 }, { b: 2 }],
        te: null,
      },
      {
        key: '3',
        name: 'Edrward 4',
        age: 32,
        gender: 'female',
        address: 'London Park no. 4',
        list: [{ a: 1 }, { b: 2 }],
        te: null,
      },
      {
        key: '4',
        name: 'Edrward 5',
        age: 32,
        gender: 'male',
        address: 'London Park no. 5',
        list: [{ a: 1 }, { b: 2 }],
        te: null,
      },
    ],
    bordered: false,
  },
}
