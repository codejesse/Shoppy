import styled from "styled-components";
import Sidebar from "./Sidebar";

const WalletContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin: auto;
`;

const WalletWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   /* border: 1px solid red; */
   height: 90vh;
   margin-left: 28rem;
`;

const HeaderText = styled.div`
   font-family: 'Clash Display';
   font-style: normal;
   font-weight: 500;
   font-size: 50px;
   line-height: 62px;
   color: #212427;
`;

const BalanceCard = styled.div`
   width: 347px;
   height: 160px;
   background: #71C587;
   box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.03);
   border-radius: 30px;
   background-image: url('/wavy4.png');
   background-repeat: no-repeat;
   background-size: cover;
`;

const BalanceCardDetails = styled.div`
   margin: auto;
   padding: 2rem;
`;

const BalanceHeader = styled.div`
   font-family: 'Clash Display';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 18px;
   color: #FFFFFF;
`;

const BalanceText = styled.div`
   font-family: 'Clash Display';
   font-style: normal;
   font-weight: 500;
   font-size: 35px;
   line-height: 43px;
   color: #FFFFFF;
`;

const UsernameText = styled.div`
   font-family: 'Clash Display';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 25px;
   color: #FFFFFF;
`;

const ActivityWrapper = styled.div`
   display: flex;
   flex-direction: column;
   /* border: 1px solid blue; */
   margin: auto;
   width: 100%;
   margin-left: 2rem;
   margin-top: 15rem;
`;

const ActivityHeader = styled.div`
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #212427;
`;

const ActivityCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    &:hover {
        cursor: pointer;
    }
`;

const ActivityDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const ActivityText = styled.div`
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #212427;
`;

const MoreDetails = styled.div`
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #939393;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: right;
    margin: auto;
    height: fit-content;
    width: 40%;
    /* border: 1px solid red; */
`;

const ViewMoreButton = styled.button`
    width: 56px;
    height: 21px;
    border: 1px solid #939393;
    border-radius: 30px;
    background: none;
`;

const Wallet = () => {
    return (
        <WalletContainer>
            <WalletWrapper>
                <HeaderText>Wallet</HeaderText>
                <BalanceCard>
                    <BalanceCardDetails>
                        <BalanceHeader>Balance</BalanceHeader>
                        <BalanceText>$120,000.00</BalanceText>
                        <UsernameText>John smith</UsernameText>
                    </BalanceCardDetails>
                </BalanceCard>
            </WalletWrapper>
            <ActivityWrapper>
                <ActivityHeader>Activity</ActivityHeader>
                <ActivityCard>
                    <img src="/User.png" alt="mock-user" width="50px" height="50px" />
                    <ActivityDetails>
                        <ActivityText>John sent you $3.00</ActivityText>
                        <MoreDetails>Click for more details</MoreDetails>
                    </ActivityDetails>
                    <ButtonWrapper>
                        <ViewMoreButton>View</ViewMoreButton>
                    </ButtonWrapper>
                </ActivityCard>
                <ActivityCard>
                    <img src="/User2.png" alt="mock-user" width="50px" height="50px" />
                    <ActivityDetails>
                        <ActivityText>John sent you $3.00</ActivityText>
                        <MoreDetails>Click for more details</MoreDetails>
                    </ActivityDetails>
                </ActivityCard>
                <ActivityCard>
                    <img src="/User.png" alt="mock-user" width="50px" height="50px" />
                    <ActivityDetails>
                        <ActivityText>John sent you $3.00</ActivityText>
                        <MoreDetails>Click for more details</MoreDetails>
                    </ActivityDetails>
                </ActivityCard>
                <ActivityCard>
                    <img src="/User.png" alt="mock-user" width="50px" height="50px" />
                    <ActivityDetails>
                        <ActivityText>John sent you $3.00</ActivityText>
                        <MoreDetails>Click for more details</MoreDetails>
                    </ActivityDetails>
                </ActivityCard>
            </ActivityWrapper>
        </WalletContainer>
    );
}

export default Wallet;