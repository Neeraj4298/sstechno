import { siteConfig } from '../config/site';

export function primaryPhone() {
  return siteConfig.contact.phones.find((p) => p.primary) ?? siteConfig.contact.phones[0];
}

export function telHref(e164: string) {
  return `tel:${e164}`;
}

export function waHref(message: string, number: string = primaryPhone().whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
