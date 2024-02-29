import 'react-toastify/dist/ReactToastify.css';

import {
  ChakraProvider,
  theme,
  Box,
} from "@chakra-ui/react"
import PatientForm from "./components/patientForm"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box display="flex" justifyContent="center" padding="1rem" width="100%" height="100%">
      <Box padding="0 1rem" width="100%" height="100%">
        <PatientForm />
      </Box>
    </Box>
  </ChakraProvider>
)
