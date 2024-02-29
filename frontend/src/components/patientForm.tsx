import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import Select from 'react-select';
import usePatientForm from "../hooks/usePatientForm";
import useFetchOptions from "../hooks/useFetchOptions";

const PatientForm: React.FC = () => {
  const { formData, handleChange, handleSubmit } = usePatientForm({
    name: "",
    dateOfTreatment: "",
    treatmentDescription: [],
    medicationsPrescribed: [],
    costOfTreatment: "",
  });

  const treatmentOptions = useFetchOptions("treatment-description")
  const medicationsOptions = useFetchOptions("medications-prescribed")

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const isFormValid =
      formData.name !== "" &&
      formData.dateOfTreatment !== "" &&
      formData.treatmentDescription.length > 0 &&
      formData.medicationsPrescribed.length > 0 &&
      formData.costOfTreatment !== null;

    setIsSubmitDisabled(!isFormValid);
  }, [formData]);

  return (
    <Container py="10">
      <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
        <Heading size={"lg"} marginBottom={"30px"} textAlign="center">HEALTHCARE TREATMENT ENTRY SYSTEM</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing="3">
            <FormControl>
              <FormLabel>Name : </FormLabel>
              <Input
                isRequired
                textColor={"grey"}       
                backgroundColor={"white"}
                placeholder="Enter Name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Date of Treatment : </FormLabel>
              <Input
                isRequired
                textColor={"grey"}       
                backgroundColor={"white"}
                size="md"
                type="datetime-local"
                value={formData.dateOfTreatment}
                onChange={(e) => handleChange("dateOfTreatment", e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Treatment Description : </FormLabel>
              <Select
                required = {true}
                options={treatmentOptions}
                placeholder='Select'
                value={formData.treatmentDescription}
                onChange={(selectedOption) => handleChange("treatmentDescription", selectedOption)}
                isMulti
              />
            </FormControl>

            <FormControl>
              <FormLabel>Medications Prescribed : </FormLabel>
              <Select
                required = {true}
                options={medicationsOptions}
                placeholder='Select'
                value={formData.medicationsPrescribed}
                onChange={(selectedOption) => handleChange("medicationsPrescribed", selectedOption)}
                isMulti
              />
            </FormControl>

            <FormControl>
              <FormLabel>Cost of Treatment : </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='grey'
                  fontSize='1em'
                >
                Rp.
              </InputLeftElement>
              <Input
                type="number"
                placeholder='Enter amount'
                value={formData.costOfTreatment?.toString()}
                onChange={(e) => handleChange("costOfTreatment", e.target.value)}
              />
            </InputGroup>
            </FormControl>  

            <Button 
              marginTop={"20px"} 
              type="submit" 
              colorScheme="teal"
              disabled={isSubmitDisabled}>
              Sumbit
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default PatientForm;
