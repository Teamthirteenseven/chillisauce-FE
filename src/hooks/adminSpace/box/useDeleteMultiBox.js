import { useDispatch } from 'react-redux';
import { __deleteMultiBox } from '../../../redux/modules/spaceMultiBoxSlice';

export const useDeleteMultiBox = () => {
  const dispatch = useDispatch();

  const onSubmitDelete = (multiBoxId, spaceId) => {
    dispatch(
      __deleteMultiBox({
        multiBoxId,
        spaceId,
      }),
    );
  };

  return {
    onSubmitDelete,
  };
};
