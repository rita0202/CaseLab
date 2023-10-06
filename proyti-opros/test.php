<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test");
?><?$APPLICATION->IncludeComponent(
	"bitrix:voting.form", 
	"voting.form1", 
	array(
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"VOTE_ID" => "1",
		"VOTE_RESULT_TEMPLATE" => "vote-result.php?VOTE_ID=#VOTE_ID#",
		"COMPONENT_TEMPLATE" => "voting.form1"
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>