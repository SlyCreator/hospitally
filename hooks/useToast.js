import { useCallback } from 'react'
import { showMessage } from 'react-native-flash-message'

/**
 * A toast is a small message that appears at the top of the screen.
 */
// export interface Toast {
//   message: string
//   type?: 'success' | 'warning' | 'danger' | 'info'
// }

/**
 * A hook that handles showing toasts.
 */
function useToast(msg) {
  const toast = msg 
  const showToast = useCallback((toast) => {
    let duration = 3000

    if (toast.type === 'warning') {
      duration = 5000
    } else if (toast.type === 'danger') {
      duration = 10000
    }

    showMessage({
      message: toast.message,
      type: toast.type || 'info',
      duration,
      textStyle: { textAlign: 'center' },
    })
  }, [])

  return {
    showToast,
  }
}

export default useToast
