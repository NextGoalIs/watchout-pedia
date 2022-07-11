import styled from "@emotion/styled";
import { Sign } from "crypto";

const Base = styled.header``;

const Navigation = styled.nav``;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul``;

const Menu = styled.li``;

const MenuButton = styled.button``;

const SearchMenu = styled.li``;

const Link = styled.a``;

const TextLogo = styled.h1``;

const SearchContainer = styled.div``;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label``;

const SearchInput = styled.input``;

const SignIn = styled.button``;

const SignOut = styled.button``;

const Header: React.FC = () => {
  const handleKeyword = () => {};

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  <span className="primary">WATCHOUT</span>
                  <span>PEDIA</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href="/">
                <MenuButton>영화</MenuButton>
              </Link>
              <Link href="/tv">
                <MenuButton>TV 프로그램</MenuButton>
              </Link>
              <SearchMenu>
                <SearchContainer>
                  <SearchFormWrapper>
                    <SearchForm>
                      <SearchLabel />
                      <SearchInput
                        placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                        onChange={handleKeyword}
                      />
                    </SearchForm>
                  </SearchFormWrapper>
                </SearchContainer>
              </SearchMenu>
              <Menu>
                <SignIn>로그인</SignIn>
              </Menu>
              <Menu>
                <SignIn>회원가입</SignIn>
              </Menu>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

export default Header;
