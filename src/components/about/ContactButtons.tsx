"use client";

import React, { useState } from "react";
import { Button, IconButton, Row } from "@once-ui-system/core";

type SocialItem = {
  name: string;
  icon?: string;
  link?: string;
  essential?: boolean;
};

export default function ContactButtons({ social }: { social: SocialItem[] }) {
  const [showPhone, setShowPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneClick = async (link?: string) => {
    if (!link) return;
    const num = link.replace(/^tel:/, "");
    try {
      await navigator.clipboard.writeText(num);
    } catch (e) {
      // ignore
    }
    setPhoneNumber(num);
    setShowPhone(true);
    window.setTimeout(() => setShowPhone(false), 4000);
  };

  return (
    <>
      {social
        .filter(
          (item) =>
            item.essential &&
            !["whatsapp", "instagram", "x"].includes(item.name.toLowerCase()),
        )
        .map((item) => {
          if (item.name.toLowerCase() === "phone") {
            return (
              <React.Fragment key={item.name}>
                <Row s={{ hide: true }}>
                  <Button
                    onClick={() => handlePhoneClick(item.link)}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    weight="default"
                    variant="secondary"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <IconButton
                    size="l"
                    key={`${item.name}-icon`}
                    onClick={() => handlePhoneClick(item.link)}
                    icon={item.icon}
                    variant="secondary"
                  />
                </Row>
                {showPhone && (
                  <Row key={`${item.name}-number`} paddingLeft="8">
                    {phoneNumber}
                  </Row>
                )}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={item.name}>
              <Row s={{ hide: true }}>
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="s"
                  weight="default"
                  variant="secondary"
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <IconButton
                  size="l"
                  key={`${item.name}-icon`}
                  href={item.link}
                  icon={item.icon}
                  variant="secondary"
                />
              </Row>
            </React.Fragment>
          );
        })}

      {/* Download CV button */}
      <Row s={{ hide: true }}>
        <Button
          href="/documents/Johnson-Thomas-CV.pdf"
          prefixIcon="document"
          label="Download CV"
          size="s"
          variant="primary"
        />
      </Row>
      <Row hide s={{ hide: false }}>
        <IconButton href="/documents/Johnson-Thomas-CV.pdf" icon="document" variant="primary" size="l" />
      </Row>
    </>
  );
}
