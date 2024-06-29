import { figmaUrl } from '../examples'

export default function Task() {
	return (
		<>
			<div className='flex flex-col gap-1'>
				<div className='text-foreground text-xl'>Zadanie rekrutacyjne:</div>
				<div className='text-pink-intense text-lg'>Wymagania</div>
			</div>

			<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
				<p>
					Wieloetapowy formularz zgłoszeniowy mobile-first, zbierający dane osobowe oraz preferencje dietetyczne i
					treningowe.
				</p>

				<div className='font-bold text-grey-700 pb-1 pt-3.5'>Wymagania funkcjonalne:</div>
				<ul className='list-disc pl-5'>
					<li>Formularz składający się z 3 kroków.</li>
					<li>Walidacja każdego kroku, przed przejściem do następnego.</li>
					<li>Przechowywanie stanu formularza i zachowanie wersji roboczej w local storage.</li>
					<li>
						Przycisk w głównym widoku umożliwiający przejście do nowej ankiety lub wersji roboczej, jeśli nie została
						wysłana lub strona została odświeżona w trakcie wypełniania.
					</li>
					<li>Wyświetlanie wersji roboczej zapisanej w głównym widoku aplikacji.</li>
					<li>Historia wysłanych z sukcesem ankiet w global state, wyświetlana w głównym widoku aplikacji. </li>
					<li>Przycisk umożliwiający usunięcie ostatniej ankiety dodanej do global state.</li>
				</ul>

				<div className='font-bold text-grey-700 pb-1 pt-3.5'>UX/UI:</div>
				<ul className='list-disc pl-5'>
					<li>
						Precyzyjne odwzorowanie projektu z dostarczonej{' '}
						<a href={figmaUrl} target='_blank' className='underline text-pink-intense'>
							Figmy
						</a>
						.
					</li>
					<li>Użycie Flexbox do stworzenia layoutów.</li>
					<li>Płynne animacje przejść pomiędzy krokami.</li>
					<li>Toast obsługujący sukces i błędy API.</li>
					<li>Tylko wersja mobilna.</li>
				</ul>

				<div className='font-bold text-grey-700 pb-1 pt-3.5'>Wymagania techniczne:</div>
				<ul className='list-disc pl-5'>
					<li>React.js</li>
					<li>React Router</li>
					<li>React Query lub RTK Query</li>
					<li>Tailwind CSS</li>
					<li>Shadcn/ui</li>
					<li>TypeScript</li>
					<li>
						Symulacja API z wykorzystaniem <span className='text-pink-intense'>./api/mockApi.ts</span>
					</li>
				</ul>
			</div>

			<div className='text-pink-intense text-lg'>Oceniane aspekty</div>

			<div className='bg-white p-2.5 text-grey-600 text-sm tracking-normal font-medium rounded-[10px] font-mono'>
				<ul className='list-disc pl-5'>
					<li>Czystość i organizacja kodu.</li>
					<li>Precyzyjność odwzorowania UI z Figmy.</li>
					<li>Skuteczność implementacji funkcjonalności i animacji.</li>
					<li>Zrozumienie i zastosowanie nowoczesnych praktyk w React.js.</li>
					<li>Umiejętność zarządzania stanem aplikacji.</li>
					<li>Efektywne wykorzystanie Flexboxa i Tailwind CSS. </li>
					<li>Wykorzystanie shadcn/ui.</li>
				</ul>
			</div>
		</>
	)
}
