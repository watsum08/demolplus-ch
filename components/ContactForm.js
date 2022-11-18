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

import { TriangleDownIcon } from "@chakra-ui/icons";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const form = useRef();
  const recaptchaRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    messageSent();

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

  const messageSent = () => {
    setFormOpacity(0);
    setTimeout(() => {
      setFormDisplay("none");
      setTyMsgDisplay("block");
      setTyMsgOpacity(1);
    }, 1000);
  };

  const [formOpacity, setFormOpacity] = useState(1);
  const [formDisplay, setFormDisplay] = useState("block");
  const [tyMsgDisplay, setTyMsgDisplay] = useState("none");
  const [tyMsgOpacity, setTyMsgOpacity] = useState(0);

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
      <Text
        bg="transparent"
        fontSize="22px"
        fontWeight={600}
        my={12}
        display={tyMsgDisplay}
        opacity={tyMsgOpacity}
        transition="1s all"
      >
        Merci pour votre message. Nous vous répondrons dans les plus bréfs
        délais.
      </Text>
      <Box
        bg="transparent"
        opacity={formOpacity}
        display={formDisplay}
        transition="1s all"
      >
        <Box bg="transparent" color="#fff" mt={5} fontWeight={400}>
          Pour toutes questions ou demandes de devis, contactez-nous directement
          grâce au formulaire ci-dessous
          <TriangleDownIcon
            color="#fff"
            bg="transparent"
            w="12px"
            ml={3}
            pb="2px"
          />
        </Box>
        <Flex
          bg="transparent"
          w="full"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <FormControl
            bg="transparent"
            w={{ base: "100%", md: "48%" }}
            isRequired
            mt={5}
          >
            <FormLabel
              bg="transparent"
              textTransform="uppercase"
              m={1}
              requiredIndicator={false}
            >
              Nom* :
            </FormLabel>
            <Input type="text" rounded="none" name="user_nom" />
          </FormControl>

          <FormControl
            bg="transparent"
            w={{ base: "100%", md: "48%" }}
            isRequired
            mt={5}
          >
            <FormLabel
              bg="transparent"
              textTransform="uppercase"
              m={1}
              requiredIndicator={false}
            >
              Prénom* :
            </FormLabel>
            <Input type="text" rounded="none" name="user_prenom" />
          </FormControl>
        </Flex>

        <Flex
          bg="transparent"
          w="full"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <FormControl
            bg="transparent"
            w={{ base: "100%", md: "48%" }}
            isRequired
            mt={5}
          >
            <FormLabel
              bg="transparent"
              textTransform="uppercase"
              m={1}
              requiredIndicator={false}
            >
              Email* :
            </FormLabel>
            <Input type="email" rounded="none" name="user_email" />
          </FormControl>

          <FormControl bg="transparent" w={{ base: "100%", md: "48%" }} mt={5}>
            <FormLabel bg="transparent" textTransform="uppercase" m={1}>
              Téléphone :
            </FormLabel>
            <Input type="tel" rounded="none" name="user_tel" />
          </FormControl>
        </Flex>

        <FormControl bg="transparent" mt={5}>
          <FormLabel bg="transparent" textTransform="uppercase" m={1}>
            Sujet :
          </FormLabel>
          <Input type="text" rounded="none" name="subject" />
        </FormControl>

        <FormControl bg="transparent" isRequired mt={5}>
          <FormLabel
            bg="transparent"
            textTransform="uppercase"
            m={1}
            requiredIndicator={false}
          >
            Message* :
          </FormLabel>
          <Textarea
            placeholder="Écrivez votre message ici ..."
            rounded="none"
            h="280px"
            name="message"
          />
        </FormControl>

        <Box bg="transparent" w="fit-content" mt={5}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfjPxkjAAAAALGg8DNscWlXshFMxyOjssD6O_mO"
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
          mt={5}
          isDisabled={isSubmitBtnDisabled}
        >
          <Text textTransform="uppercase" bg="transparent">
            Envoyer message
          </Text>
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
