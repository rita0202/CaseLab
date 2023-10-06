<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Результаты опроса");
?><?$APPLICATION->IncludeComponent(
	"bitrix:voting.result", 
	".default", 
	array(
		"CACHE_TIME" => "1200",
		"CACHE_TYPE" => "A",
		"QUESTION_DIAGRAM_1" => "histogram",
		"QUESTION_DIAGRAM_2" => "histogram",
		"QUESTION_DIAGRAM_3" => "histogram",
		"VOTE_ALL_RESULTS" => "Y",
		"VOTE_ID" => "1",
		"COMPONENT_TEMPLATE" => ".default"
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>