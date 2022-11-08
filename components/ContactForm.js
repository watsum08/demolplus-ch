import {
  Box,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vf7y90n",
        "template_xoxwxig",
        form.current,
        "EGN3La3ew3OJFWzIQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isSubmitBtnDisabled, setSubmitBtnDisabled] = useState(true);

  const captchaValidate = () => {
    setSubmitBtnDisabled(false);
  };

  return (
    <form
      style={{
        backgroundColor: "transparent",
        color: "#fff",
        marginTop: "24px",
      }}
      ref={form}
      onSubmit={sendEmail}
    >
      <Flex bg="transparent" w="full" justify="space-between" flexDir={{ base: "column", md: "row" }}>
        <FormControl bg="transparent" w={{ base: "100%", md: "48%"}}>
          <FormLabel bg="transparent" textTransform="uppercase" m={1} mt={4}>
            Nom :
          </FormLabel>
          <Input type="text" rounded="none" name="user_nom" />
        </FormControl>

        <FormControl bg="transparent" w={{ base: "100%", md: "48%"}}>
          <FormLabel bg="transparent" textTransform="uppercase" m={1} mt={4}>
            Prénom :
          </FormLabel>
          <Input type="text" rounded="none" name="user_prenom" />
        </FormControl>
      </Flex>

      <Flex bg="transparent" w="full" justify="space-between" flexDir={{ base: "column", md: "row" }}>
        <FormControl bg="transparent" w={{ base: "100%", md: "48%"}}>
          <FormLabel bg="transparent" textTransform="uppercase" m={1} mt={4}>
            Email :
          </FormLabel>
          <Input type="email" rounded="none" name="user_email" />
        </FormControl>

        <FormControl bg="transparent" w={{ base: "100%", md: "48%"}}>
          <FormLabel bg="transparent" textTransform="uppercase" m={1} mt={4}>
            Téléphone :
          </FormLabel>
          <Input type="tel" rounded="none" name="user_tel" />
        </FormControl>
      </Flex>

      <FormControl bg="transparent">
        <FormLabel bg="transparent" textTransform="uppercase" m={1} mt={4}>
          Sujet :
        </FormLabel>
        <Input type="text" rounded="none" name="subject" />
      </FormControl>

      <FormControl bg="transparent">
        <FormLabel bg="transparent" textTransform="uppercase" m={1} mt={4}>
          Message :
        </FormLabel>
        <Textarea
          placeholder="Écrivez votre message ici ..."
          rounded="none"
          h="280px"
          name="message"
        />
      </FormControl>

      <Box bg="transparent" w="fit-content" mt={6}>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={captchaValidate}
        />
      </Box>

      <Button
        type="submit"
        bg="#2E2E2E"
        border="1px solid #BBB"
        fontFamily="'Bebas Neue', cursive"
        fontSize="28px"
        letterSpacing="2px"
        fontWeight={400}
        rounded="none"
        w="full"
        py={12}
        mt={6}
        isDisabled={isSubmitBtnDisabled}
      >
        <Text textTransform="uppercase" bg="transparent">
          Envoyer message
        </Text>
      </Button>
    </form>
  );
};

export default ContactForm;