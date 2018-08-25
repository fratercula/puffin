export default {
  node: 'Card',
  props: {
    style: {
      maxWidth: 360,
      position: 'absolute',
      top: 60,
      left: 60,
    },
  },
  children: [
    {
      node: 'CardMedia',
      props: {
        style: { height: 140 },
        title: 'Contemplative Reptile',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      },
    },
    {
      node: 'CardContent',
      children: [
        {
          node: 'Typography',
          props: {
            gutterBottom: true,
            variant: 'headline',
            component: 'h2',
          },
          children: 'Lizard',
        },
        {
          node: 'Typography',
          props: { component: 'p' },
          children: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
      ],
    },
    {
      node: 'CardActions',
      children: [
        {
          node: 'Button',
          props: {
            size: 'small',
            type: 'primary',
          },
          children: 'Share',
        },
        {
          node: 'Button',
          props: {
            size: 'small',
            type: 'primary',
          },
          children: 'Learn More',
        },
      ],
    },
  ],
}
