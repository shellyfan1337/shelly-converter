export class ShellyConverter {
    static textToShelly(text: string): string {
        return text.split('').map(char => {
            const binary = char.charCodeAt(0).toString(2).padStart(8, '0');
            return binary.replace(/0/g, 'Shelly').replace(/1/g, 'Шелли');
        }).join(' ');
    }

    static shellyToText(shellyText: string): string {
        return shellyText.split(' ').map(word => {
            const binary = word.replace(/Shelly/g, '0').replace(/Шелли/g, '1');
            return String.fromCharCode(parseInt(binary, 2));
        }).join('');
    }
}