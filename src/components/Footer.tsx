import styled from "@emotion/styled";

const Base = styled.footer``;

const Section = styled.section``;

const Statistics = styled.section``;

const Summary = styled.span``;

const Emphasis = styled.em``;

const Container = styled.section``;

const ContentWrapper = styled.div``;

const Left = styled.div``;

const Right = styled.div``;

const TermAndPolicy = styled.ul``;

const TermAndPolicyItem = styled.li``;

const Footer: React.FC = () => {
  return (
    <Base>
      <Section>
        <Statistics>
          <Summary>
            지금까지 &nbsp;
            <Emphasis>* 644, 934, 343 개의 평가가</Emphasis>
            &bnsp;쌓여있습니다.
          </Summary>
        </Statistics>
        <Container>
          <ContentWrapper>
            <Left>
              <TermAndPolicy>
                <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                <TermAndPolicyItem>회사 정보</TermAndPolicyItem>
              </TermAndPolicy>
            </Left>
            <Right />
          </ContentWrapper>
        </Container>
      </Section>
    </Base>
  );
};

export default Footer;
