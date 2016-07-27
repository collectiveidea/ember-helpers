export default function symbol(currency) {
	switch (currency) {
        case 'AFN': return '؋';
        case 'ARS': return '$';
        case 'AUD': return '$';
        case 'AWG': return 'ƒ';
        case 'AZN': return 'ман';
        case 'BBD': return '$';
        case 'BGN': return 'лв';
        case 'BMD': return '$';
        case 'BND': return '$';
        case 'BOB': return '$b';
        case 'BRL': return 'R$';
        case 'BSD': return '$';
        case 'BWP': return 'P';
        case 'BYR': return 'p.';
        case 'BZD': return 'BZ$';
        case 'CAD': return '$';
        case 'CHF': return 'SFr';
        case 'CNY': return '¥';
        case 'CUP': return '₱';
        case 'DKK': return 'kr';
        case 'EGP': return 'ج.م.';
        case 'EUR': return '€';
        case 'FJD': return '$';
        case 'GBP': return '£';
        case 'GGP': return '£';
        case 'GTQ': return 'Q';
        case 'GYD': return '$';
        case 'HKD': return '$';
        case 'HUF': return 'Ft';
        case 'IDR': return 'Rp';
        case 'ILS': return '₪';
        case 'INR': return 'INR';
        case 'IRR': return '﷼';
        case 'ISJ': return 'kr';
        case 'JMD': return 'J$';
        case 'JPY': return '¥';
        case 'KPW': return '₩';
        case 'KYD': return '$';
        case 'LKR': return '$';
        case 'LRD': return '₨';
        case 'MKD': return 'ден';
        case 'MNT': return '₮';
        case 'MUR': return '₨';
        case 'MXN': return '$';
        case 'MYR': return 'RM';
        case 'MZN': return 'MT';
        case 'NAD': return '$';
        case 'NGN': return '₦';
        case 'NIO': return 'C$';
        case 'NOK': return 'kr';
        case 'NZD': return '$';
        case 'PAB': return 'B/.';
        case 'PEN': return 'S/.';
        case 'PHP': return '₱';
        case 'PLN': return 'zł';
        case 'PYG': return '₲';
        case 'QAR': return '﷼';
        case 'RON': return 'lei';
        case 'RUB': return 'руб';
        case 'SBD': return '$';
        case 'SCR': return '₨';
        case 'SEK': return 'kr';
        case 'SGD': return '$';
        case 'SHP': return '£';
        case 'SRD': return '$';
        case 'SYP': return '£';
        case 'THB': return '฿';
        case 'TTD': return 'TT$';
        case 'TVD': return '$';
        case 'TWD': return 'NT$';
        case 'UAH': return '₴';
        case 'USD': return '$';
        case 'UYU': return '$U';
        case 'UZS': return 'лв';
        case 'VEF': return 'Bs';
        case 'VND': return '₫';
        case 'YER': return '﷼';
        case 'ZAR': return 'R';
        case 'ZWD': return 'Z$';
        default: return currency;
    }
}