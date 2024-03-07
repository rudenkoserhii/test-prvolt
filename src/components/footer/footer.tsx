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

import React, { useState } from 'react'
import { URL } from '../../constants'
import { ReactComponent as icon } from '../../asserts/icons/logo.svg'
import { ReactComponent as title } from '../../asserts/icons/title.svg'
import { ReactComponent as bsky } from '../../asserts/icons/bsky.svg'

function FooterComponent(): React.JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <Footer container className="bg-[#dafc00]">
      <div
        className="justify-between flex-col gap-6
                  w-full flex items-center sm:flex-row"
      >
        <div className="flex gap-4 items-center">
          <Footer.Icon
            title="ToDo Manager"
            href={URL.homePage}
            icon={icon}
            className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
[&>svg]:w-auto [&>svg]:h-[2rem] [&>svg]:hover:fill-[#a556e6]
[&>svg]:hover:transition-all"
          />
          <Footer.Icon
            title="ToDo Manager"
            href={URL.homePage}
            icon={title}
            className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
[&>svg]:w-auto [&>svg]:h-[1rem] [&>svg]:hover:fill-[#a556e6]
[&>svg]:hover:transition-all"
          />
        </div>
        <Footer.LinkGroup>
          <Footer.Title
            title="Contacts"
            className="mb-0 text-[#8442b9] cursor-pointer transition-all
                      hover:text-[#a556e6] hover:transition-all"
            onClick={(): void => setOpenModal(true)}
          />
        </Footer.LinkGroup>
        <div className="flex space-x-6 sm:justify-center">
          <Footer.LinkGroup className="gap-2">
            <Footer.Icon
              title="Facebook"
              href={URL.facebook}
              icon={BsFacebook}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="Instagram"
              href={URL.instagram}
              icon={BsInstagram}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="TwitterX"
              href={URL.twitter}
              icon={BsTwitterX}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="GitHub"
              href={URL.github}
              icon={BsGithub}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="Dribble"
              href={URL.dribble}
              icon={BsDribbble}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="LinkedIn"
              href={URL.linledin}
              icon={BsLinkedin}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="Freelancer"
              href={URL.freelancer}
              icon={SiFreelancer}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="Upwork"
              href={URL.upwork}
              icon={SiUpwork}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
            <Footer.Icon
              title="BlueSky"
              href={URL.bsky}
              icon={bsky}
              className="[&>svg]:fill-[#8442b9] [&>svg]:transition-all
                      [&>svg]:hover:fill-[#a556e6] [&>svg]:hover:transition-all"
            />
          </Footer.LinkGroup>
        </div>
      </div>
      <Modal
        dismissible
        show={openModal}
        onClose={(): void => setOpenModal(false)}
      >
        <Modal.Header
          className="[&>h3]:text-[#8442b9] [&>button]:text-[#a556e6]
        [&>button]:transition-all
                              hover:[&>button]:text-[#8442b9]
        hover:[&>button]:bg-[#caa4ea] hover:[&>button]:transition-all"
        >
          Contacts
        </Modal.Header>
        <Modal.Body>
          <Footer.LinkGroup className="justify-center">
            <Footer.Link
              className="text-[#a556e6]"
              href="mailto:rudenko.serhii.v@gmail.com"
            >
              rudenko.serhii.v@gmail.com
            </Footer.Link>
            <Footer.Link className="text-[#a556e6]" href="tel:+380504521144">
              +380 50 452 11 44
            </Footer.Link>
          </Footer.LinkGroup>
        </Modal.Body>
        <Modal.Footer className="justify-center">
          <p className="text-[#8442b9] font-sm text-center">Happy Coding!</p>
        </Modal.Footer>
      </Modal>
    </Footer>
  )
}

export default FooterComponent
