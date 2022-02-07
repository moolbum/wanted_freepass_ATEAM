const theme = {
  darkGray: '#323D45',
  gray: '#939FA5',
  mediumGray: '#C2C2C2',
  lightGray: '#F5F5F5',
  white: '#fff',
  navy: '#1565C0',
  blue: '#2196F3',
  toggle: '#BBDEFB',
  orange: '#FFA000',

  fontLarge: '20px',
  fontMedium: '16px',
  fontRegular: '14px',
  fontSmall: '12px',

  weightBold: '700',
  weightSemiBold: '500',
  weightRegular: '400',

  borderRadius: '4px',
  borderGray: '1px solid #939FA5',
  borderBlue: '1px solid #2196F3',

  marginCenter: '0 auto',

  mobile: `screen and (max-width: 360px)`,

  flex: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content:${justify};
    `,

  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `,

  positionFixed: `
    position: fixed;
    top: 0;
    left: 0;
    z-index:999;
  `,
};

export default theme;
