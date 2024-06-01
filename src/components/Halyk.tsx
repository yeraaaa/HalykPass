import Image from 'next/image';

export default function Halyk() {
    return (
        <div className="flex flex-col items-center text-center bg-gray-50 min-h-screen">
            <div className="text-4xl font-bold mt-8 text-[#006D58]">
                HalykPass для нерезидентов
            </div>
                <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 py-20 px-8 text-xl md:text-2xl lg:text-3xl">
                    <p className="md:w-1/2 text-justify">
                        HalykPass - это уникальный проект, который предоставляет пользователям удобный и выгодный доступ к разнообразным льготам, предложениям и интересным местам по всему Казахстану. Этот инновационный путеводитель обеспечивает уникальный опыт для туристов и местных жителей, объединяя технологии, партнерские отношения и ответственность перед окружающей средой.
                    </p>
                    <div className="mb-4 flex items-center justify-center">
                        <Image width={600} height={1080} src="/halyk.png" alt="logo" className="rounded-lg shadow-md"/>
                    </div>
                </div>
            
            <div className="font-bold text-4xl mb-4 text-[#006D58]">
                Услуги
            </div>
            <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-24">
                <div className="text-xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="font-semibold">Halyk pass на 1 день:</div>
                    <div className="mt-2">Условия: паспорт, заполненная анкета</div>
                    <div className="mt-2">Цена: взрослый - 27500, детский - 16500</div>
                    <button className="rounded-md bg-[#006D58] text-white border-2 border-transparent hover:bg-[#faaf2f] hover:text-[#006D58] transition-all p-2 mt-4 font-semibold">Оформить</button>
                </div>
                <div className="text-xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="font-semibold">Halyk pass на 1 неделю:</div>
                    <div className="mt-2">Условия: паспорт, заполненная анкета, бронь проживания</div>
                    <div className="mt-2">Цена: взрослый - 49500, детский - 30250</div>
                    <button className="rounded-md bg-[#006D58] text-white border-2 border-transparent hover:bg-[#faaf2f] hover:text-[#006D58] transition-all p-2 mt-4 font-semibold">Оформить</button>
                </div>
                <div className="text-xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="font-semibold">Halyk pass на 2 недели:</div>
                    <div className="mt-2">Условия: паспорт, заполненная анкета, бронь проживания, билеты</div>
                    <div className="mt-2">Цена: взрослый - 55000, детский - 33000</div>
                    <button className="rounded-md bg-[#006D58] text-white border-2 border-transparent hover:bg-[#faaf2f] hover:text-[#006D58] transition-all p-2 mt-4 font-semibold">Оформить</button>
                </div>
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-secondary hover:text-accent-foreground h-10 py-2 px-4 bg-white shadow-md mt-6" href="https://drive.google.com/drive/folders/1jYg59YSSisot7cpScdCg9yj2JTFK1yjL">
                    Скачать HalykPass
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
            </div>
        </div>
    );
}
