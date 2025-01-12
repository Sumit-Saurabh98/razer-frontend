export function CartBigWhiteText({ t }:{t: string}) {
  return <p className="text-2xl text-white">{t}</p>;
}

export function CartWhiteHeading({ t }:{t: string}) {
  return <h3 className="text-3xl font-bold text-white">{t}</h3>;
}

export function CartGrayText({ t }:{t: string}) {
  return <p className="text-sm text-gray-400">{t}</p>;
}

export function CartGreenLinkText({ t }:{t: string}) {
  return (
    <p className="text-sm text-white underline hover:text-[#44d62c] cursor-pointer">
      {t}
    </p>
  );
}

export function CartWhiteSmallText({ t }:{t: string}) {
  return <p className="text-sm text-white">{t}</p>;
}

export function CartBlueLinkText({ t }:{t: string}) {
  return (
    <p className="text-sm text-[#25a7d0] hover:underline cursor-pointer">
      {t}
    </p>
  );
}