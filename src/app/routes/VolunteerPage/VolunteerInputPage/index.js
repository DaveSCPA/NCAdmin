import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

class VolunteerInputPage extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id='Add New Volunteer' />}
        />
        <div className='d-flex justify-content-center'>
          <h1>This is the Volunteer Input Page</h1>
        </div>
      </div>
    );
  }
}

export default VolunteerInputPage;

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));

// export default function VolunteerInputPage() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('Controlled');

//   const handleChange = event => {
//     setValue(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete='off'>
//       <div>
//         <TextField
//           id='id'
//           label='ID'
//           placeholder='ID'
//           multiline
//           value={value}
//           onChange={handleChange}
//           variant='filled'
//         />
//         <TextField
//           id='zipcode'
//           label='Zip'
//           placeholder='Zip'
//           multiline
//           rows='4'
//           defaultValue='Default Value'
//           value={value}
//           onChange={handleChange}
//           variant='filled'
//         />
//       </div>
//       <div>
//         <TextField
//           id='fname'
//           label='fname'
//           multiline
//           rowsMax='4'
//           value={value}
//           onChange={handleChange}
//           variant='filled'
//         />
//         <TextField
//           id='lname'
//           label='lname'
//           multiline
//           rowsMax='4'
//           value={value}
//           onChange={handleChange}
//           variant='filled'
//         />
//       </div>
//     </form>
//   );
// }
