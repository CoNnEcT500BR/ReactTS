import Expression from "./Expression";

type TUserInfoProps = {
  user?: IUserInfoProps;
};

interface IUserInfoProps {
  name?: string;
  email?: string;
}

export default function UserInfo({ user }: TUserInfoProps) {
  const nick = user || {};

  return (
    <div>
      <Expression test={nick && nick.name}>
        <p>
          Seja bem-vindo <strong>{nick.name}</strong>!
        </p>
      </Expression>
      <Expression test={!nick || !nick.name}>
        <p>
          Seja bem-vindo <strong>Amigão</strong>!
        </p>
      </Expression>
    </div>
  );
}
