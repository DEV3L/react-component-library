import { helpers } from 'react-free-style';
import * as colors from './colors';

export const clientMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '2px',
  background: '#BA9A1C',
  color: 'white',
};
export const buyerMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '2px',
  lineHeight: 1,
  background: '#853B6C',
  color: 'white',
};
export const employeeMarker = {
  fontSize: 12,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '2px',
  background: 'black',
  color: 'white',
};

export const adhocMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  lineHeight: 1,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '2px',
  color: 'white',
};

export const privateMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '2px',
  background: '#A80CE8',
  color: 'white',
};
export const industryMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  lineHeight: 1,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '4px',
  background: '#49B6BA',
  color: 'white',
};
export const outlookMarker = {
  fontSize: 13,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '4px',
  fontWeight: 300,
  marginRight: '5px',
  lineHeight: 1,
  background: '#0072C6',
  color: 'white',
};

export const clientMobileMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  padding: '4px',
  background: '#BA9A1C',
  color: 'white',
};
export const buyerMobileMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  padding: '4px',
  lineHeight: 1,
  background: '#853B6C',
  color: 'white',
};
export const employeeMobileMarker = {
  fontSize: 12,
  fontWeight: 300,
  marginRight: '5px',
  height: '20px',
  width: '20px',
  textAlign: 'center',
  padding: '4px',
  background: 'black',
  color: 'white',
};

export const adhocMobileMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  lineHeight: 1,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  padding: '4px',
  color: 'white',
};

export const privateMobileMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  lineHeight: 1,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  padding: '4px',
  background: '#7A4443',
  color: 'white',
};
export const industryMobileMarker = {
  fontSize: 13,
  fontWeight: 300,
  marginRight: '5px',
  lineHeight: 1,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  padding: '4px',
  background: '#49B6BA',
  color: 'white',
};
export const outlookMobileMarker = {
  fontSize: 13,
  height: '20px',
  width: '20px',
  textAlign: 'center',
  paddingTop: '4px',
  fontWeight: 300,
  padding: '4px',
  lineHeight: 1,
  background: '#0072C6',
  color: 'white',
};
export const button = {
  display: 'inline-block',
  fontSize: '0.85em',
  padding: '0.9em 0.8em',
  background: colors.contentBackground,
  color: colors.darkText,
  border: `1px solid ${colors.border}`,
  outline: 0,
  height: 40,
  lineHeight: 1,
  textAlign: 'center',
  textDecoration: 'none',
};

export const input = {
  background: colors.contentBackground,
  border: `1px solid ${colors.border}`,
  padding: '0.6em 10px',
  WebkitAppearance: 'none', // Remove iOS internal box shadow.
  borderRadius: 0, // Remove iOS rounded corners.
  outline: 0,
  height: 40,
  width: '100%',
  fontSize: 14,
  lineHeight: 1,
  '&[disabled]': {
    background: colors.background,
  },
};

export const textarea = helpers.merge(input, {
  lineHeight: 1.3,
  resize: 'vertical',
});

export const actionable = {
  cursor: 'pointer',
};

export const link = helpers.merge(
  {
    color: 'inherit',
    textDecoration: 'underline',
  },
  actionable
);

export const reset = {
  background: 'none',
  border: 0,
  outline: 0,
  margin: 0,
  padding: 0,
};

export const icon = {
  display: 'inline-block',
  backgroundSize: 'cover',
};

export const menu = {
  display: 'flex',
  fontSize: 10,
  textTransform: 'uppercase',
};

export const menuItem = helpers.merge(link, {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  height: 34,
  lineHeight: 1,
  padding: '0 16px',
});

export const activeMenuItem = {
  color: '#fff',
  background: '#000',
};

export const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
