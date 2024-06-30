import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ModalProps {
    planet: any;
    onClose: () => void;
}

const PlanetModal: React.FC<ModalProps> = ({ planet, onClose }) => {
    return (
        <Dialog
            open={!!planet}
            onClose={onClose}
            aria-labelledby="planet-dialog-title"
        >
            <DialogTitle id="planet-dialog-title">
                {planet?.modelSrc.split('/').slice(-2, -1)[0]}
            </DialogTitle>
            <DialogContent>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={planet?.image || "/static/images/cards/contemplative-reptile.jpg"}
                        alt={planet?.modelSrc.split('/').slice(-2, -1)[0]}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {planet?.modelSrc.split('/').slice(-2, -1)[0]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Position: {planet?.position.join(', ')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Scale: {planet?.scale}
                        </Typography>
                    </CardContent>
                </Card>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default PlanetModal;
