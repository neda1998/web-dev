import Company from "./Company/Company"
import CustomerSupport from "./CustomerSupport/CustomerSupport"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import Price from "./Price/Price"
import SupportItem from "./SupportItem/SupportItem"

interface Props {

}
const Home = ({  }: Props) => {
    return (
        <div>
            <Hero />
            <Features />
            <CustomerSupport />
            <Price />
            <SupportItem />
            <Company />
        </div>
    )
}

export default Home
