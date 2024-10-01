import { get } from 'svelte/store';
import { MessageModal, MessageModalData } from '$stores/ModalStore';
import { pushModal } from '$features/modals/ModalQueue';

export const showMessage = (title: string, message: string) => {
  MessageModalData.set({
    title,
    message,
  });
  const messageModal = get(MessageModal);
  pushModal(messageModal);
};
