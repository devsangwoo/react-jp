import React from 'react'
import useDB from '../../hooks/useDB'
import classNames from 'classnames'

import Card from '../layouts/Card'

import styles from './style.module.scss'

import EmailIcon from '../../assets/email.svg'
import GithubIcon from '../../assets/github.svg'
import PhoneIcon from '../../assets/phone.svg'
import BlogIcon from '../../assets/blog.svg'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)
  const { config } = useDB()

  return (
    <Card className={classProps} title='이력서'>
      <span className={styles.title1}>웹 프론트엔드 개발자</span>
      <span className={styles.title2}>조상우</span>
      <div className={styles.descriptions}>
        <p className={styles.description}>도쿄에서 웹 프론트엔드 엔지니어로 일하고 있으며, 특히 유저 입장에서 만족할 수 있는 UI 설계를 목표하고 있습니다. </p>
        <p className={styles.description}>비즈니스 로직과 가치를 이해하려고 노력하는 개발자입니다. 주도적으로 업무를 진행할 수 있는 환경을 선호하고 도전하고 싶습니다.</p>
      </div>
      <div className={styles.descriptions}>
        <p className={styles.title3}>- 생년월일 : 1991년 02년 26일 (만 29세)</p>
        <p className={styles.title3}>- 한국주소 : 전라북도 전주시 완산구 삼천동 1가 흥건아파트 101/1702</p>
        <p className={styles.title3}>- 전화번호 : (+82) 010 - 3668 - 0476</p>
        <p className={styles.title3}>-  이메일  : sangwoodev@gmail.com</p>
      </div>
      

      
      <div className={styles.iconWrap}>
        <a className={styles.link} href={config.github}>
          <img className={styles.img} src={GithubIcon} alt='github-icon' />
        </a>
        <a className={styles.link} href={`mailto:${config.email}`}>
          <img className={styles.img} src={EmailIcon} alt='email-icon' />
        </a>
        <a className={styles.link} href={`tel:${config.phone}`}>
          <img className={styles.img} src={PhoneIcon} alt='phone-icon' />
        </a>
        <a className={styles.link2} href={config.blog1}>
          <img className={styles.img} src={BlogIcon} alt='blog-icon' />
        </a>
      </div>
    </Card>
  )
}

export default Introduce
