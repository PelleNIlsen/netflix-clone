import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';

interface InfoModalProps {
    visible?: boolean;
    onClose: any;
};

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
    const [isVisible, setIsVisible] = useState(!!visible);

    const { movieId } = useInfoModal();
    const { data = {} } = useMovie(movieId);

    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return (
        <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
            <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>

            </div>
        </div>
    )
}

export default InfoModal;