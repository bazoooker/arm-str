<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
?> 


            <section class="hero mb-60" style="background-image: url(/img/bg/bg-hero.jpg)">
                <div class="container">
                     <h1 class="text-deco text-deco_size-l text-deco_blue text-white">Производство качественной<br/>запорной арматуры</h1>
                    </div>
                </div>
            </section>

            <section class="catalog-list">
                <div class="container">
                    <aside class="catalog-list__sidebar js-sticky-sidebar">
                        <h2 class="text-deco text-deco_size-s text-deco_blue js-text-deco-anim">Каталог продукции</h2>
                        <p><b>Основным направлением деятельности НПО Арматуростроитель является развитие собственного производства качественной запорной арматуры.</b></p>
                        <p><i>Вся изготавливаемая продукция проходит приемо-сдаточные испытания в соответствии с ГОСТ 5762-2002.</i></p>
                        <a href="" class="link link_dl-pdf">Скачать каталог продукции</a>
                        <a href="" class="link link_dl-doc">Скачать опросный лист</a>
                    </aside>
                    <div class="product-list">
                        <div class="row">
                            
<?$APPLICATION->IncludeComponent("bitrix:catalog.section.list","homesections",
Array(
        "VIEW_MODE" => "TEXT",
        "SHOW_PARENT_NAME" => "Y",
        "IBLOCK_TYPE" => "",
        "IBLOCK_ID" => "1",
        "SECTION_ID" => 0,
        "SECTION_CODE" => "",
        "SECTION_URL" => "",
        "COUNT_ELEMENTS" => "Y",
        "TOP_DEPTH" => "1",
        "SECTION_FIELDS" => "",
        "SECTION_USER_FIELDS" => "",
        "ADD_SECTIONS_CHAIN" => "Y",
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "36000000",
        "CACHE_NOTES" => "",
        "CACHE_GROUPS" => "Y"
    )		
);?>                        
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="lead-big">
                        <h2 class="text-deco text-deco_size-s text-deco_blue">Научно-производственное <br/>объединение арматуростроитель</h2>
                        <div class="row">
                            <div class="col-12 col-lg-6 col-md-12">
                                <p><b>
                                    Основным направлением деятельности НПО Арматуростроитель является развитие собственного производства качественной запорной арматуры, а именно:
                                </b></p>
                                <ul>
                                    <li>Задвижек стальных литых клиновых DN50 - 1200 мм, PN1,6 -16 МПа,</li>
                                    <li>Задвижек кованых компактных (ЗКС) DN15 - 50 мм, PN1,6 - 20 МПа,</li>
                                    <li>Задвижек чугунных с обрезиненным клином DN50 - 800 МПа, PN1,0 - 1,6 МПа,</li>
                                    <li>Клапанов обратных поворотных стальных DN50 - 1200 мм, PN1,6 - 10 МПа,</li>
                                    <li>Клапанов запорных стальных DN15 - 400 мм, PN1,6 - 4,0 МПа,</li>
                                </ul>
                                <p class="mb-20">которые широко используются при транспортировке воды, пара, газа, воздуха, нефти, мазутов, масел и прочих жидкостей.</p>
                            </div>
                            <div class="col-12 col-lg-6 col-md-12">
                                <p class="text-big mb-40 hidden-to-md">
                                    Предлагаем наш опыт и возможности для реализации совместных производственных проектов и поставок оборудования для нужд трубопроводного транспорта и технологических процессов предприятий теплоэнергетического комплекса, нефтяной, газовой, химической, пищевой, горнодобывающей, целлюлозно-бумажной промышленности и жилищно-коммунального хозяйства.
                                </p>
                                <a href="#" class="btn btn_main btn_size-l js-scroll-to-section wow fadeInUp" data-scroll-target="email-form" data-wow-delay="800ms"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Напишите нам</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>
