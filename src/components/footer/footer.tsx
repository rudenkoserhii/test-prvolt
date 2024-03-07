import { Footer } from 'flowbite-react'
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs'
import React from 'react'

function FooterComponent(): React.JSX.Element {
  return (
    <Footer container>
      <div
        className="w-full justify-between sm:flex
            sm:items-center sm:justify-between"
      >
        <Footer.Brand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.LinkGroup>
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  )
}

export default FooterComponent
