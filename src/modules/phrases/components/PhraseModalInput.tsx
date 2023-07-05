import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ModalProps } from '../../../interfaces/modal-interface';

const PhraseModalInput : React.FC<ModalProps>  = (props) => {
    const { handleClose, open,handleInsert ,setTexto, errorText, required, error } = props;
    return (
      <div>
        <Dialog fullWidth open={open} onClose={handleClose}>
          <DialogTitle>Please Insert a Phrase</DialogTitle>
          <DialogContent>
          <TextField
          id="txtPhrase"
          fullWidth
          required={required}
          onChange={(e) => setTexto(e.target.value)}
          error={error}
          helperText={errorText}
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleInsert}>Insert Phrase</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
export default PhraseModalInput;