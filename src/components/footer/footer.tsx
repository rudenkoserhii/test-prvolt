import React, { useState } from 'react'
import { Footer, Modal } from 'flowbite-react'
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from 'react-icons/bs'
import { SiFreelancer, SiUpwork } from 'react-icons/si'
import { COLORS, URL } from 'consts'
import { ReactComponent as bsky } from 'asserts/icons/bsky.svg'

function FooterComponent(): React.JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <Footer
      container
      className={`bg-transparent border-4 border-[${COLORS.text}] mt-auto`}
    >
      <div
        className="justify-between flex-col gap-6
                  w-full flex items-center sm:flex-row"
      >
        <Footer.LinkGroup>
          <Footer.Title
            title="Contacts"
            className={`title mb-0 text-[${COLORS.text}] cursor-pointer
            transition-all hover:transition-all`}
            onClick={(): void => setOpenModal(true)}
          />
        </Footer.LinkGroup>
        <div className="flex space-x-6 sm:justify-center">
          <Footer.LinkGroup className="gap-2">
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              href={URL.facebook}
              icon={BsFacebook}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              href={URL.instagram}
              icon={BsInstagram}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="TwitterX"
              href={URL.twitter}
              icon={BsTwitterX}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              href={URL.github}
              icon={BsGithub}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="Dribble"
              href={URL.dribble}
              icon={BsDribbble}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              href={URL.linledin}
              icon={BsLinkedin}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="Freelancer"
              href={URL.freelancer}
              icon={SiFreelancer}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="Upwork"
              href={URL.upwork}
              icon={SiUpwork}
              className="icon"
            />
            <Footer.Icon
              target="_blank"
              rel="noopener noreferrer"
              title="BlueSky"
              href={URL.bsky}
              icon={bsky}
              className="icon"
            />
          </Footer.LinkGroup>
        </div>
      </div>
      <Modal
        className={`[&>div>div]:bg-[${COLORS.text}]`}
        dismissible
        show={openModal}
        onClose={(): void => setOpenModal(false)}
      >
        <Modal.Header
          className={`[&>h3]:text-[${COLORS.background}]
            [&>button]:text-[${COLORS.backgroundSecondary}]
            [&>button]:transition-all
            hover:[&>button]:text-[${COLORS.background}]
            hover:[&>button]:bg-[${COLORS.backgroundThird}]
            hover:[&>button]:transition-all`}
        >
          Contacts
        </Modal.Header>
        <Modal.Body>
          <Footer.LinkGroup className="justify-center">
            <Footer.Link
              className={`text-[${COLORS.backgroundSecondary}]`}
              href="mailto:rudenko.serhii.v@gmail.com"
            >
              rudenko.serhii.v@gmail.com
            </Footer.Link>
            <Footer.Link
              className={`text-[${COLORS.backgroundSecondary}]`}
              href="tel:+380504521144"
            >
              +380 50 452 11 44
            </Footer.Link>
          </Footer.LinkGroup>
        </Modal.Body>
        <Modal.Footer className="justify-center">
          <p className={`text-[${COLORS.background}] font-sm text-center`}>
            Happy Coding!
          </p>
        </Modal.Footer>
      </Modal>
    </Footer>
  )
}

export default FooterComponent
